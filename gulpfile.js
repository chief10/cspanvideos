const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript');
const spawn = require("child_process").spawn;

const CONFIG = {
  CODE_PATH_SRC: "./src/**/*.ts",
  CODE_PATH_DIST: "./dist",
  CODE_PATH_TEST_SRC: "./test/*.ts",
  CODE_PATH_TEST_DIST: "./test/dist"
};

const tsProject = ts.createProject("tsconfig.json");

gulp.task("compile-code", () => {
  const tsResult = tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(tsProject());

    return tsResult.js
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(CONFIG.CODE_PATH_DIST));
});


gulp.task("tests", ["compile-code"], () => {
  const cmd = spawn('mocha', ["dist/test",
   "-u",
    "tdd",
    "--timeout",
    "999999",
    "--colors"], {
    cwd: "./",
    stdio: "inherit"
  });

  cmd.on("error", (err) => {
    console.error("There was a problem with the mocha command", err);
  })
})

gulp.task("watch:code",["compile-code"], () => {
  gulp.watch([
    CONFIG.CODE_PATH_SRC, 
    CONFIG.CODE_PATH_TEST_SRC
  ], ["tests"])
})