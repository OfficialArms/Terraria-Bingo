npm run build

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:OfficialArms/Terraria-Bingo.git master:gh-pages

cd ..