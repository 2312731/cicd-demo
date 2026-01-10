pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t 2312731/jenkins-app .'
            }
        }

        stage('Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Push') {
            steps {
                sh '''
                  docker tag 2312731/jenkins-app 2312731/jenkins-app:latest
                  docker push 2312731/jenkins-app:latest
                '''
            }
        }
    }
}

