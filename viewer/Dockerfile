
#######################################################
##  This repo can be used to replace the standard    ##
##  viewer within the formio-files-core server       ##
##                                                   ##
##  IMPORTANT: The formio-files-core repo is only    ##
##  available to customers who have purchased the    ##
##  PDF Functionality on premise.                    ##
##                                                   ##
##  To build a docker image, run the following       ##
##  commands:                                        ##
##                                                   ##
##  npm run build                                    ##
##  docker build .                                   ##
##  // Copy the buildId of the docker image          ##
##  docker tag :buildId yourorg/yourrepo:1.0.0       ##
##  docker push yourorg/yourrepo                     ##
##  docker push yourorg/yourrepo:1.0.0               ##
##                                                   ##
#######################################################

FROM formio/pdf-server:3.0.0-rc.13
COPY ./dist /app/node_modules/formio-viewer/dist/
