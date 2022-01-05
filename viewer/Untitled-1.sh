docker run -itd \
  -e "LICENSE_KEY=1RhHEjWvRvpz58XAq5qbSbrNEwoM99" \
  -e "MONGO=mongodb://mongo:27017/formio" \
  -e "FORMIO_S3_SERVER=minio" \
  -e "FORMIO_S3_PORT=9000" \
  -e "FORMIO_S3_BUCKET=formio" \
  -e "FORMIO_S3_KEY=CHANGEME" \
  -e "FORMIO_S3_SECRET=CHANGEME" \
  -e "FORMIO_DEBUG=true" \
  -e "DEBUG=*.*" \
  --network formio \
  --link formio-mongo:mongo \
  --link formio-minio:minio \
  --restart unless-stopped \
  --name pdf-server \
  -p 4005:4005 \
  formio/pdf-server:3.3.2-rc.10;