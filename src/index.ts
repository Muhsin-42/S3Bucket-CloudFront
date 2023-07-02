import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { getSignedUrl } from '@aws-sdk/cloudfront-signer';

dotenv.config();
const app = express();

const fileName = "github-icon.png"
const PORT = process.env.PORT;
const cloudFrontDomainUrl  = process.env.CLOUDFRONT_URL || '';
const cloudfrontKeyPairId  = process.env.CLOUDFRONT_KEY_PAIR_ID || '';
const cloudfrontPrivateKey = process.env.CLOUDFRONT_PRIVATE_KEY || '';

app.get('/api/image', async (req: Request, res: Response) => {
  try {
    const date = new Date(Date.now() + 5 * 60000);
    let fileUrl = getSignedUrl({
      url: `${cloudFrontDomainUrl}${fileName}`,
      dateLessThan: date.toISOString(),
      keyPairId: cloudfrontKeyPairId,
      privateKey: cloudfrontPrivateKey
    });
    console.log(fileUrl);
    res.send(fileUrl);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`SERVER READY AT PORT ${PORT}`));