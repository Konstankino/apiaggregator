FROM node:8.12

# Create workdir and copy package.json
RUN mkdir -p /src
WORKDIR /src
COPY fetchify/package*.json /src/

# Install packages
RUN npm install
