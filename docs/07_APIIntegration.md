# API Integration

## YouTube Data API
- Used for video content recommendations.  
- Search pattern: `topic + diploma + tutorial`.  
- Stores videoId, title, and channel details.

## SBTET API
- Retrieves student attendance and results via secure proxy.  
- Uses PIN-based authentication.  
- Data stored securely in encrypted form.

## AI Model API
- Endpoint: `/ai/query`  
- Input: `{ user_id, query, level }`  
- Output: `{ response, topic, references, videos }`
