pipeline {
  agent any

  environment {
    DOCKERHUB_USER = '2312731'
    IMAGE_NAME = 'jenkins-app'
  }

  stages {
    stage('Pull') {
      steps {
        git 'https://github.com/2312731/cicd-demo.git'
      }
    }

    stage('Build') {
      steps {
        sh 'docker build -t $DOCKERHUB_USER/$IMAGE_NAME .'
      }
    }

    stage('Login') {
      steps {
        withCredentials([usernamePassword(
          credentialsId: 'dockerhub',
          usernameVariable: 'USER',
          passwordVariable: 'PASS'
        )]) {
          sh 'echo $PASS | docker login -u $USER --password-stdin'
        }
      }
    }

    stage('View Images') {
      steps {
        sh 'docker images'
      }
    }

    stage('Tag') {
      steps {
        sh 'docker tag $DOCKERHUB_USER/$IMAGE_NAME:latest $DOCKERHUB_USER/$IMAGE_NAME:latest'
      }
    }

    stage('Push') {
      steps {
        sh 'docker push $DOCKERHUB_USER/$IMAGE_NAME:latest'
      }
    }

    stage('Deploy') {
      steps {
        sh '''
        docker rm -f jenkins-app || true
        docker run -d -p 3000:3000 --name jenkins-app $DOCKERHUB_USER/$IMAGE_NAME:latest
        '''
      }
    }
  }
}
