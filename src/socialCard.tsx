import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

interface SocialCardProps {
  url: string;
  title: string;
  description: string;
  color?: string;
}

function SocialCard({ url, title, description, color }: SocialCardProps) {
  const cardColor = color || 'primary.text';
  return (
    <Card raised sx={{color: cardColor}}>
      <CardActionArea rel="me" target='_blank' href={url}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SocialCard;