FROM cypress/included:8.5.0
RUN mkdir /cypress-docker
WORKDIR /cypress-docker
COPY package.json .
COPY package-lock.json .
COPY cypress.json .
COPY cypress cypress
COPY node_modules node_modules
#RUN npm install
ENTRYPOINT ["npm", "run"]