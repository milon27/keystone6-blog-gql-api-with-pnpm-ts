echo -n "Enter NODE_ENV [dev/prod] (enter to select dev):"
read mode
if [[ $mode = "prod" ]]
then
    # manully create public/files, public/images folder before run the appplication
    mkdir -p public/files
    mkdir -p public/images
    # run in production
    npm run build
    npm run start
    echo "prod"
else
    # run in developement
    npm run dev
    echo "dev"
fi



