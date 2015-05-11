module.exports = function (grunt) {
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
 
        clean: ["dist", '.tmp'],
 
        copy: {
            main: {
                expand: true,
                cwd: 'app/',
                src: ['**', '!js/**', '!lib/**', '!**/*.css'],
                dest: 'dist/'
            },
            shims: {
                expand: true,
                cwd: 'app/lib/webshim/shims',
                src: ['**'],
                dest: 'dist/js/shims'
            }
        },
 
        rev: {
            files: {
                src: ['dist/**/*.{js,css}', '!dist/js/shims/**']
            }
        },
 
        useminPrepare: {
            html: 'app/index.html'
        },
 
        usemin: {
            html: ['dist/index.html']
        },
 
        uglify: {
            options: {
                report: 'min',
                mangle: false
            }
        },

        karma: {  
            unit: {
                options: {
                  frameworks: ['jasmine'],
                  singleRun: true,
                  browsers: ['PhantomJS'],
                  files: [
                    'bower_components/angular/angular.js',
                    'bower_components/angular-mocks/angular-mocks.js',
                    'app/js/**/*.js'
                  ]
                }
            }
        },

        concat: {  
            options: {},
            dist: {
                files: {
                    'public/js/app.js': [
                    'app/js/**/*.js',
                    '!app/js/**/*.tests.js'
                   ]
                }
            }
        }
    });
 
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-karma');
 
    // Tell Grunt what to do when we type "grunt" into the terminal
    grunt.registerTask('default', [
        'copy', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'rev', 'usemin'
    ]);

    grunt.registerTask('test', [  
        'jshint',
        'karma'
    ]);
};