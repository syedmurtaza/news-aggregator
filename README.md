# News Aggregator

This project is a News Aggregator application containerized using Docker.

## Prerequisites

- Docker installed on your system
- Sudo privileges (for Linux/macOS users)

## Building the Docker Image

To build the Docker image, run the following command in the root directory of the project:

```bash
sudo docker build --no-cache -f Dockerfile -t newsaggregator:ng .
```

## Comments

This command does the following:

**sudo**: Runs the command with superuser privileges  
**docker build**: Builds a Docker image  
**--no-cache**: Builds the image without using the cache  
**-f Dockerfile**: Specifies the Dockerfile to use  
**-t newsaggregator:ng**: Tags the image as "newsaggregator" with the tag "ng"  
**.**: Uses the current directory as the build context  

## Running the Docker Image

After building the image, you can run the container using this command:

```bash
sudo docker run -d -it --rm -p 8090:8090 --name newsaggregator newsaggregator:ng
```

## Comments

This command does the following:

**sudo**: Runs the command with superuser privileges  
**docker run**: Creates and runs a new container  
**-d**: Runs the container in detached mode (in the background)  
**-it**: Allocates a pseudo-TTY and keeps STDIN open  
**--rm**: Automatically removes the container when it exits  
**-p 8090:8090**: Maps port 8090 on the host to port 8090 in the container  
**--name newsaggregator**: Names the container "newsaggregator"  
**newsaggregator:ng**: Specifies the image to use  

## Accessing the Application

Once the container is running, you can access the News Aggregator application by navigating to:

```link
[News Aggregator Assignment](http://localhost:8090/)
```
in your web browser.

### Credentials

**username:** adm_nsw  
**password:** aalansw*3

*__Note:__* *This doesn't validate the user against the database using an API. It simply uses hard-coded credentials to secure the news aggregator page.*


## Stopping the Container

To stop the running container, use the following command:

```bash
sudo docker stop newsaggregator
```

## Troubleshooting

**If you encounter any issues, try the following:**

1. Ensure Docker is running on your system
2. Check if the ports are not in use by another application
3. Verify that you have the necessary permissions to run Docker commands

For more detailed logs, you can run the container without the __*-d flag*__:

```bash
sudo docker run -it --rm -p 8090:8090 --name newsaggregator newsaggregator:ng
```

This will display the container logs in your terminal. 

### Thank you