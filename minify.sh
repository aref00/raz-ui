for file in lib/**/*.js; do
    uglifyjs "$file" -c -o "$file" 
done 