soy_file="templates.soy"
outdir="generated"

if [ ! -d $outdir ]; then
  mkdir $outdir
fi

echo "***Running SoyToJsSrcCompiler***"
java -jar closure-templates/SoyToJsSrcCompiler.jar \
  --outputPathFormat $outdir/{INPUT_FILE_NAME_NO_EXT}.js \
  $soy_file
