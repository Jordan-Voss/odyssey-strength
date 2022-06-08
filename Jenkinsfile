pipeline { 
    agent any 
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage('Build') { 
            steps { 
                sh 'npm install'
                sh 'expo add'
                sh 'expo build:web'
            }
        }
        stage('Remove Old Site'){
            steps {
                sh 'cp -r /var/www/html/web-build ~/'
            }
        }
        stage('Deploy New Site') {
            steps {
                sh 'cp -r web-build/ /var/www/html'
            }
        }
                stage('Remove Old') {
            steps {
                sh 'rm -rf ~/web-build'
            }
    }
    }
}
