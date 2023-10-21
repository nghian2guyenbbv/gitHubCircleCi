FROM --platform=amd64 openjdk:8
LABEL authors="nghianguyenbbv"
WORKDIR /gitHubCircleCI
COPY target/githubCircle.jar githubCircle.jar
EXPOSE 8080
CMD ["java", "-jar", "githubCircle.jar"]