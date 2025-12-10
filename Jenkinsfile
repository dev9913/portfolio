pipeline {
    agent any 
    
    stages {
       stage('code-check') {
        steps {
            echo 'checking code ...'
            git branch: 'main',
            url: 'https://github.com/dev9913/portfolio.git'
            echo " success >> ~~~ ..... !!!!"
            }
       }
       stage('Build') {
        steps {
            echo 'Building the Docker image  ...'
            sh "docker build -t dev7878/portfolio:latest  . "
            echo " success >> ~~~ ..... !!!!"
            }
       }
       stage('Run') {
           steps{
               echo 'Runnig the docker image ... '
               sh "docker run -d -p 80:8080 dev9913/portfolio:latest "
               echo " Success !!!~~~~"
           }
       }
       stage("Push-image"){
           steps{
               withCredentials([usernamePassword(
                credentialsId: 'dockerhub',
                usernameVariable: 'DOCKER_USER',
                passwordVariable: 'DOCKER_PASS'
                )]) {
                 // Login to DockerHub
                sh '''
                 echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                '''

                // Push Docker image
                sh 'docker push dev7878/portfolio:latest '
                }
           }
       }
        
    }
}
