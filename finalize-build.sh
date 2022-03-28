mkdir -p lib/style/components/
sass --style=compressed src/style/index.scss lib/style.css
for file in lib/**/*.js; do
	sed -i 's/.module.scss/.module.css/g' "$file"
	sed -i 's/..\/..\/style\/components/..\/style/g' "$file"
    uglifyjs "$file" -c -o "$file" 
done 

for file in src/style/components/*.scss; do
    sass --style=compressed "$file" "lib/style/components/$(basename "$file" .css)" 
done 