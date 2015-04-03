
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      // 子任务名称，这名称随你起
      roy: {
        // 源文件路径
        src: [
          'public/js/roy/model/*.js'
        ],
        // 运行任务后生成的目标文件
        dest: 'public/js/lib/roy.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('concat-roy',['concat:roy']);


};