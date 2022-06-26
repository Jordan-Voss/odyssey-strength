pipeline { 
    agent any 
    options {
        buildDiscarder(logRotator(numToKeepStr: '5', artifactNumToKeepStr: '5'))
        skipStagesAfterUnstable()
    }
    stages {
        stage('Build') { 
            steps { 
                sh 'ls'
                sh 'sudo cp -r /var/www/html/web-build ~/'
                sh 'npm install'
                sh 'expo add'
                sh 'expo build:web'
            }
        }
        stage('Remove Old Site'){
            steps {
                sh 'sudo cp -r /var/www/html/web-build ~/'
            }
        }
        stage('Deploy New Site') {
            steps {
                sh 'sudo cp -r web-build/ /var/www/html'
            }
        }
        
                stage('Remove Old') {
            steps {
                sh 'sudo rm -rf ~/web-build'
            }
    }
    }
}
