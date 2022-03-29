sass --style=compressed src/style/index.scss lib/style.css

for file in src/style/components/*.scss; do
    sass --style=compressed "$file" "lib/$(basename "$file" .scss).css" 
done 
