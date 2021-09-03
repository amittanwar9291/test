# reference: https://hub.docker.com/p/loomchild/volume-backup
export PROJECT_NAME="rr-backend"
export DATE=$(date +%F_%H-%M-%S)
echo ${PROJECT_NAME}
docker stop $(docker ps -aq)
docker run -v ${PROJECT_NAME}_mssql-data:/volume -v ~/backup:/backup --rm loomchild/volume-backup backup mssql-backup-${DATE}
docker run -v ${PROJECT_NAME}_minio-data:/volume -v ~/backup:/backup --rm loomchild/volume-backup backup minio-backup-${DATE} 

# example restore: docker run -v ${PROJECT_NAME}_minio-data:/volume -v ~/backup:/backup --rm loomchild/volume-backup restore minio-backup-2020-10-19_13-54-52 