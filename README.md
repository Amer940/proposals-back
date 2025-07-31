                                                                    /* CONFIGURATION OF BACKEND *\
                                                                                                                            
                                                  firstly you need to create a database named "proposals" !!!!!!!!!!!!!!!
                                                                                                           
                                                  you need an ".env" file in the root folder with this structure:
                                                  PORT=5003
                                                  DOMAIN=http://localhost:3000    # this is the frontend domain
                                                  DB_NAME=proposals
                                                  DB_USERNAME=root                # probably is root
                                                  DB_PASSWORD=                    # your db password
                                                                                                           
                                                  After you setup these important steps open command prompt and then run
                                                                                                           
                                                  npm install
                                                  npx sequelize-cli db:migrate
                                                  npx sequelize-cli db:seed:all
                                                                                                           
                                                  npm run dev
                                                                                                           
                                                  ///// AFTER ALL THIS YOU ARE READY !!!!
