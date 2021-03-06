// Generated on 2014-07-31 using generator-angular 0.9.5
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    build: 'build'
  };

  // Reads arguments if passed from cli
  var deploymentName = grunt.option('deploymentName') || "towermanagement";
  var deploymentType = grunt.option('deploymentType') || "tgz";


  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= yeoman.app %>/scripts/**/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      styles: {
        files: ['<%= yeoman.app %>/sass/{,*/}*.scss'],
        tasks: ['sass', 'newer:copy:styles', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '<%= yeoman.app %>/views/tmpl/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
          '<%= yeoman.app %>/languages/{,*/}*.json'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9006,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: '0.0.0.0',
        livereload: 35725
      },
      livereload: {
        options: {
          open: true,
          middleware: function(connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9007,
          middleware: function(connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      build: {
        options: {
          open: true,
          base: '<%= yeoman.build %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // compile sass files
    sass: {
      build: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/sass',
          src: ['*.scss'],
          dest: '<%= yeoman.app %>/styles',
          ext: '.css'
        }],

        options: {
          loadPath: [
            './bower_components/bourbon/app/assets/stylesheets'
          ]
        }
      }
    },

    // Empties folders to start fresh
    clean: {
      build: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.build %>/*',
            '!<%= yeoman.build %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      build: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath: /\.\.\//
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      build: {
        src: [
          '<%= yeoman.build %>/shared/*.js',
          '<%= yeoman.build %>/styles/{,*/}*.css',
          // '<%= yeoman.build %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.build %>/styles/fonts/*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.build %>',
        flow: {
          steps: {
            js: ['concat', 'uglifyjs'],
            css: ['concat', 'cssmin']
          },
          post: {}
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.build %>/{,**/}*.html'],
      css: ['<%= yeoman.build %>/styles/{,*/}*.css'],
      json: ['<%= yeoman.build %>/scripts/jsons/*.json'],
      options: {
        assetsDirs: ['<%= yeoman.build %>', '<%= yeoman.build %>/images'],

      }
    },

    // The following *-min tasks will produce minified files in the build folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    // build: {
    // files: {
    // '<%= yeoman.build %>/styles/main.css': [
    // '.tmp/styles/{,*/}*.css'
    // ]
    // }
    // }
    // },
    // uglify: {
    // options: {
    // mangle: { except: ["$super"] }
    // }
    // build: {
    // files: {
    // '<%= yeoman.build %>/scripts/scripts.js': [
    // '<%= yeoman.build %>/scripts/scripts.js'
    // ]
    // }
    // },
    // },
    // concat: {
    // build: {}
    // },

    imagemin: {
      build: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif,ico}',
          dest: '<%= yeoman.build %>/images'
        }]
      }
    },

    svgmin: {
      build: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.build %>/images'
        }]
      }
    },

    htmlmin: {
      build: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: false,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.build %>',
          src: ['*.html', 'views/{,*/}*.html', 'views/tmpl/{,*/}*.html'],
          dest: '<%= yeoman.build %>'
        }]
      }
    },

    // ngAnnotate tries to make the code safe for minification automatically by
    // using the Angular long form for dependency injection. It doesn't work on
    // things like resolve or inject so those have to be done manually.
    ngAnnotate: {
      build: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/shared',
          src: '*.js',
          dest: '.tmp/concat/shared'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      build: {
        html: ['<%= yeoman.build %>/*.html']
      }
    },

    // JavaScript parser, minifier, compressor
    uglify: {
      options: {
        mangle: false
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      build: {
        files: [{
            expand: true,
            dot: true,
            cwd: '<%= yeoman.app %>',
            dest: '<%= yeoman.build %>',
            src: [
              '*.{ico,png,txt}',
              '.htaccess',
              '*.html',
              'views/**/*',
              'images/{,*/}*.{webp}',
              'config/*',
              'components/**/*',
              'fonts/*'
            ]
          }, {
            expand: true,
            cwd: '<%= yeoman.app %>',
            dest: '<%= yeoman.build %>',
            src: ['shared/kii/**/*']
          }, {
            expand: true,
            cwd: '<%= yeoman.app %>',
            dest: '<%= yeoman.build %>',
            src: ['shared/vendor/**/*']
          },
          {
            expand: true,
            cwd: '.tmp/images',
            dest: '<%= yeoman.build %>/images',
            src: ['generated/*']
          }, {
            expand: true,
            cwd: 'bower_components/bootstrap/build',
            src: 'fonts/*',
            dest: '<%= yeoman.build %>'
          }, {
            expand: true,
            cwd: 'bower_components/simple-line-icons',
            src: 'fonts/*',
            dest: '<%= yeoman.build %>'
          }, {
            expand: true,
            cwd: 'bower_components/font-awesome',
            src: 'fonts/*',
            dest: '<%= yeoman.build %>'
          }, {
            expand: true,
            cwd: 'bower_components/material-design-iconic-font/build',
            src: 'fonts/*',
            dest: '<%= yeoman.build %>'
          }, {
            expand: true,
            cwd: 'bower_components/weather-icons',
            src: 'font/*',
            dest: '<%= yeoman.build %>'
          }, {
            expand: true,
            cwd: '<%= yeoman.app %>/scripts',
            src: ['jsons/**', 'modules/**', 'vendor/**'],
            dest: '<%= yeoman.build %>/scripts'
          }, {
            expand: true,
            cwd: '<%= yeoman.app %>',
            src: 'languages/*',
            dest: '<%= yeoman.build %>'
          }, {
            expand: true,
            cwd: 'bower_components/leaflet-draw/build',
            src: 'images/*',
            dest: '<%= yeoman.build %>/styles'
          }, {
            expand: true,
            cwd: 'bower_components/leaflet/build',
            src: 'images/*',
            dest: '<%= yeoman.build %>/styles'
          }
        ]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },


    // tarball all the files in the root dir into vm-dashboard-ui.tar.gz
    compress: {
      build: {
        options: {
          archive: './<%= yeoman.build %>/' + deploymentName + '.' + deploymentType
        },
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.build %>',
          src: '**/*'
        }]
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      build: [
        'copy:styles',
        'imagemin',
        'svgmin'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-ng-annotate');

  grunt.loadNpmTasks('grunt-karma');

  grunt.loadNpmTasks('grunt-contrib-compress');

  grunt.registerTask('serve', 'Compile then start a connect web server', function(target) {
    if (target === 'build') {
      return grunt.task.run(['build', 'connect:build:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'concurrent:server',
      // 'sass',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function(target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:build',
    // 'wiredep',
    'useminPrepare',
    // 'sass',
    'concurrent:build',
    'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:build',
    'cdnify',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    // 'htmlmin',
    'compress:build'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
