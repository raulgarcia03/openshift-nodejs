pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    openshift.withCluster() {
                        openshift.withProject() {
                            if (!openshift.selector("dc", "myapp").exists()) {
                                openshift.newApp('https://github.com/cellosofia/openshift-nodejs', '--name=myapp', '--strategy=source')
                            } else {
                                openshift.startBuild("myapp")
                            }
                        }
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    openshift.withCluster() {
                        openshift.withProject() {
                            if (openshift.selector("dc", "myapp").exists()) {
                                openshift.selector("dc", "myapp").rollout().latest()
                            }
                        }
                    }
                }
            }
        }
    }
}