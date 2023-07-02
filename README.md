# S3 Bucket And CloudFront Distribution

The repository showcases how to create a secured S3 bucket and utilize it through a CloudFront distribution using an Express server written in TypeScript. The server leverages an API call to acquire a signed URL with a 5-minute validity, granting access to an image file uploaded in the S3 bucket.

## Setup
1. Clone this repository: `git clone https://github.com/Muhsin-42/S3Bucket-CloudFront.git`
2. Install the dependencies: `npm install`
3. Configure AWS CLI: `aws configure`
4. Create a private S3 bucket and upload an image file to it.
5. Create a CloudFront distribution, setting the S3 bucket as the origin.
6. Obtain the CloudFront distribution domain name.
7. Create `.env` file with the following variables:
   - `CLOUDFRONT_URL`: The CloudFront distribution domain URL.
   - `CLOUDFRONT_KEY_PAIR_ID`: Your CloudFront key pair ID.
   - `CLOUDFRONT_PRIVATE_KEY`: Your CloudFront private key.
8. Start the Express server: `npm run dev`
9. API EndPoint:  `http://localhost:8800/api/image`.
10. The server will make an API call to the CloudFront distribution to obtain a signed URL for the image file with a 5-minute expiry time.
11. The signed URL will be logged in the server console.
12. Copy the signed URL and paste it into a browser to view the image file. After 5 minutes, accessing the same URL will lead to an access-denied page.


## To Run The Server
````bash
npm run dev