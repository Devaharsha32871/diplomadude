# Data Model and Storage

## Tables and Collections

### users
| Field | Type | Description |
|--------|------|-------------|
| user_id | String | Unique identifier |
| name | String | Student name |
| pin | String | Secure access code |
| level | Integer | Learning proficiency level |
| xp | Integer | Progress score |
| interest | String | Area of interest |
| join_date | Timestamp | Account creation date |

### sessions
| Field | Type | Description |
|--------|------|-------------|
| session_id | String | Chat session ID |
| user_id | String | Associated user |
| query | Text | User question |
| response | Text | AI-generated explanation |
| topic | String | Related subject topic |
| rating | Integer | User feedback score |
