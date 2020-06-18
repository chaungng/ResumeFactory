FROM amazoncorretto:8u252
VOLUME /tmp
ADD out/artifacts/app_jar/resumefactory.jar resumefactory.jar 
EXPOSE 8081
ENTRYPOINT ["java","-jar","resumefactory.jar"]