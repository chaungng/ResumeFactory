FROM amazoncorretto:8u252 as build
WORKDIR /workspace/app

COPY gradle gradle
COPY .gradle .gradle
COPY build.gradle .
COPY gradlew .
COPY gradlew.bat .
COPY src src

RUN ./gradlew build
RUN mkdir -p build/dependency && (cd build/dependency; jar -xf ../libs/*.jar)

FROM amazoncorretto:8u252
VOLUME /tmp
EXPOSE 8000
ARG DEPENDENCY=/workspace/app/build/dependency
COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app
ENTRYPOINT ["java","-cp","app:app/lib/*","com.group.resumefactory.ResumeFactoryApplication"]