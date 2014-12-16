'use strict';

module.exports = function ( grunt ) {
    // load all grunt tasks
    require( 'load-grunt-tasks' )( grunt );

    // configurable paths
    var folders = {
        app: 'src',
        dist: 'build'
    };

    grunt.initConfig({
        folders: folders,
        notify_hooks: {
            options: {
                enabled: true,
                success: true, // whether successful grunt executions should be notified automatically
            }
        },
        watch: {
            styles: {
                files: [ '<%= folders.app %>/styl/**/*.styl' ],
                tasks: [ 'sass', 'notify_hooks' ]
            },
            html: {
                files: '<%= folders.app %>/jade/**/*.jade',
                tasks: [ 'jade', 'notify_hooks' ]
            },
            scripts: {
                files: [ '<%= folders.app %>/scripts/**/*.js' ],
                tasks: [ 'copy:js', 'notify_hooks' ]
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= folders.dist %>/*',
                        '!<%= folders.dist %>/.git*',
                        '<%= folders.dist %>'
                    ]
                }]
            }
        },
        jade: {
            html: {
                files: {
                    '<%= folders.dist %>/index.html': '<%= folders.app %>/jade/index/index.jade',
                    // '<%= folders.dist %>/page.html': '<%= folders.app %>/jade/page/index.jade',
                },
                options: {
                    pretty: false,
                    basedir: '<%= folders.app %>/jade'
                }
            }
        },
        sass: {
            styles: {
                options: {
                    style: 'expanded'
                },
                files: {
                    '<%= folders.dist %>/css/main.css': '<%= folders.app %>/styles/main.scss'
                }
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= folders.app %>',
                    dest: '<%= folders.dist %>',
                    src: [
                        '*.{ico,txt}',
                        'img/**/*',
                        'styles/fonts/*'
                    ]
                }]
            },
            js: {
                files: [{
                    expand: true,
                    cwd: '<%= folders.app %>',
                    dest: '<%= folders.dist %>',
                    src: [
                        'scripts/**/*'
                    ]
                }]
            },
            assets: {
                files: [{
                    expand: true,
                    cwd: '<%= folders.app %>',
                    dest: '<%= folders.dist %>',
                    src: [
                        'assets/**/*'
                    ]
                }]
            }
        },
        serve: {
            options: {
                port: 9000
            }
        }
    });

    grunt.registerTask( 'default', 'work' )

    grunt.registerTask( 'work', [
        'clean',
        'jade',
        'sass',
        'copy',
        'notify_hooks',
        'watch'
    ]);
};
