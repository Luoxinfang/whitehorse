/**
 * Created by roy on 15-3-6.
 */

descripe('regController', function () {
  var $httpBackend, $rootScope, createController, authRequestHandler;

  beforeEach(module('somgle'));


  beforeEach(inject(function($injector){

    $httpBackend = $injector.get('$httpBackend');
    authRequestHandler = $httpBackend.when('GET','/api/user')
      .respond({
        nick_name:'somgle'
      },
      {'A-Token':'xxx'});
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });
  it('should fetch authentication token', function() {
    $httpBackend.expectGET('/auth.py');
    var controller = createController();
    $httpBackend.flush();
  });


  it('should fail authentication', function() {

    // Notice how you can change the response even after it was set
    authRequestHandler.respond(401, '');

    $httpBackend.expectGET('/auth.py');
    var controller = createController();
    $httpBackend.flush();
    expect($rootScope.status).toBe('Failed...');
  });


  it('should send msg to server', function() {
    var controller = createController();
    $httpBackend.flush();

    // now you don’t care about the authentication, but
    // the controller will still send the request and
    // $httpBackend will respond without you having to
    // specify the expectation and response for this request

    $httpBackend.expectPOST('/add-msg.py', 'message content').respond(201, '');
    $rootScope.saveMessage('message content');
    expect($rootScope.status).toBe('Saving...');
    $httpBackend.flush();
    expect($rootScope.status).toBe('');
  });


  it('should send auth header', function() {
    var controller = createController();
    $httpBackend.flush();

    $httpBackend.expectPOST('/add-msg.py', undefined, function(headers) {
      // check if the header was send, if it wasn't the expectation won't
      // match the request and the test will fail
      return headers['Authorization'] == 'xxx';
    }).respond(201, '');

    $rootScope.saveMessage('whatever');
    $httpBackend.flush();
  });

});