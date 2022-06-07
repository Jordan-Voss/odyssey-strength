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
        stage('Test'){
            steps {
                sh 'sudo mv web-build/ /var/www/html'
            }
        }
        stage('Deploy') {
            steps {
                sh 'cd ~'
                sh 'ls'
            }
        }
    }cp -r ./jenkins/workspace/Odyssey /var/www/html/test/
}
