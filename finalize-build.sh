mkdir -p lib/style/
sass --style=compressed src/style/index.scss lib/style.css
for file in lib/*.js; do
    uglifyjs "$file" --compress -o "$file" 
done 
for file in lib/**/*.js; do
    uglifyjs "$file" --compress -o "$file" 
done 
for file in lib/**/**/*.js; do
	sed -i 's/.module.scss/.module.css/g' "$file"
	# sed -i 's/..\/..\/style\/components/..\/style/g' "$file"
    uglifyjs "$file" --compress -o "$file" 
done 

for file in src/style/components/*.scss; do
    sass --style=compressed "$file" "lib/style/components/$(basename "$file" .scss).css" 
done 