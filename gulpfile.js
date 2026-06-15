const { src, dest, series, parallel } = require("gulp");
const cleanCSS = require("gulp-clean-css");
const terser = require("gulp-terser");
const htmlmin = require("gulp-htmlmin");
const replace = require("gulp-replace");
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const cleanFolder = (folderPath) => {
  fs.rmSync(folderPath, { recursive: true, force: true });
};

const cleanVersionAFolder = (done) => {
  cleanFolder("dist-a");
  done();
};

const cleanVersionBFolder = (done) => {
  cleanFolder("dist-b");
  done();
};

const copyHtmlToVersionA = () => {
  return src("src/index.html").pipe(dest("dist-a"));
};

const optimizeHtmlToVersionB = () => {
  return src("src/index.html")
    .pipe(replace('data-experiment-version="a"', 'data-experiment-version="b"'))
    .pipe(
      replace(
        "images/original/header.jpg",
        "images/optimized/header.webp",
      ),
    )
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      }),
    )
    .pipe(dest("dist-b"));
};

const copyCssToVersionA = () => {
  return src("src/styles/main.css").pipe(dest("dist-a/styles"));
};

const optimizeCssToVersionB = () => {
  return src("src/styles/main.css")
    .pipe(cleanCSS())
    .pipe(dest("dist-b/styles"));
};

const copyJavaScriptToVersionA = () => {
  return src("src/scripts/main.js").pipe(dest("dist-a/scripts"));
};

const optimizeJavaScriptToVersionB = () => {
  return src("src/scripts/main.js").pipe(terser()).pipe(dest("dist-b/scripts"));
};

const copyDataToVersionA = () => {
  return src("src/data/products.json").pipe(dest("dist-a/data"));
};

const copyDataToVersionB = () => {
  return src("src/data/products.json").pipe(dest("dist-b/data"));
};

const copyOriginalImagesToVersionA = () => {
  return src("src/images/original/**/*", { allowEmpty: true }).pipe(
    dest("dist-a/images/original"),
  );
};

const getImageFilesFromFolder = (folderPath) => {
  if (!fs.existsSync(folderPath)) {
    return [];
  }

  const folderItems = fs.readdirSync(folderPath, { withFileTypes: true });

  return folderItems.flatMap((folderItem) => {
    const fullItemPath = path.join(folderPath, folderItem.name);

    if (folderItem.isDirectory()) {
      return getImageFilesFromFolder(fullItemPath);
    }

    const fileExtension = path.extname(folderItem.name).toLowerCase();
    const isSupportedImageFile = [".jpg", ".jpeg", ".png"].includes(
      fileExtension,
    );

    if (isSupportedImageFile) {
      return [fullItemPath];
    }

    return [];
  });
};

const optimizeImagesToVersionB = async () => {
  const originalImagesFolderPath = "src/images/original";
  const optimizedImagesOutputFolderPath = "dist-b/images/optimized";

  const originalImageFiles = getImageFilesFromFolder(originalImagesFolderPath);

  fs.mkdirSync(optimizedImagesOutputFolderPath, { recursive: true });

  await Promise.all(
    originalImageFiles.map(async (originalImageFilePath) => {
      const relativeImagePath = path.relative(
        originalImagesFolderPath,
        originalImageFilePath,
      );

      const parsedImagePath = path.parse(relativeImagePath);

      const optimizedImageOutputPath = path.join(
        optimizedImagesOutputFolderPath,
        `${parsedImagePath.name}.webp`,
      );

      fs.mkdirSync(path.dirname(optimizedImageOutputPath), { recursive: true });

      await sharp(originalImageFilePath)
        .resize({
          width: 900,
          withoutEnlargement: true,
        })
        .webp({
          quality: 72,
        })
        .toFile(optimizedImageOutputPath);
    }),
  );
};

exports.buildA = series(
  cleanVersionAFolder,
  parallel(
    copyHtmlToVersionA,
    copyCssToVersionA,
    copyJavaScriptToVersionA,
    copyDataToVersionA,
    copyOriginalImagesToVersionA,
  ),
);

exports.buildB = series(
  cleanVersionBFolder,
  parallel(
    optimizeHtmlToVersionB,
    optimizeCssToVersionB,
    optimizeJavaScriptToVersionB,
    copyDataToVersionB,
    optimizeImagesToVersionB,
  ),
);

exports.build = series(exports.buildA, exports.buildB);
