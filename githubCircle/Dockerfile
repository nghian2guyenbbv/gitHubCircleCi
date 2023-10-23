FROM openjdk:8
LABEL authors="nghianguyen"
WORKDIR /githubCircle
COPY ./target/githubCircle.jar githubCircle.jar
EXPOSE 8080
CMD ["java", "-jar", "githubCircle.jar"]