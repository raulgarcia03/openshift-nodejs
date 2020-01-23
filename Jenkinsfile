pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    openshift.withCluster() {
                        openshift.withProject() {
                            if (!openshift.selector("dc", "myapp").exists()) {
                                openshift.newApp('nodejs:10~https://github.com/cellosofia/openshift-nodejs', '--name=myapp', '--strategy=source')
                                openshift.set("triggers", "dc/myapp", "--remove-all")
                                def bc=openshift.selector("bc", "myapp").object()
                                bc.spec.strategy.sourceStrategy.incremental=true
                                openshift.apply(bc)
                                openshift.expose("svc", "myapp")
                                openshift.cancelBuild("bc/myapp")
                                openshift.startBuild("myapp", "--wait")
                            } else {
                                openshift.startBuild("myapp", "--wait")
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