"use client";
import { Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import SocialCard from '../socialCard';

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Card>
        <CardMedia sx={{ height: 300 }} image='icon.jpg' title='MoSadie' />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            MoSadie
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Hello! I&apos;m MoSadie, a software developer and amature content creator. I like to make (and break) things. My specialties include live streaming, client/server communication, and attempting to be funny the whole time.
          </Typography>
        </CardContent>
      </Card>
      <br />
      <SocialCard url={'https://twitch.tv/MoSadie'} title='Twitch - MoSadie' description='Gaming and programming, what could go wrong!' color='#9146FF'/>
      <br />
      <SocialCard url={"https://youtube.com/@MoSadie"} title='YouTube - @MoSadie' description='A mix of project updates and other content.' color='#FF0000'/>
      <br />
      <SocialCard url={"https://discord.gg/YA6BRJVJ5t"} title="Discord - MoSadie" description='You can find me as "MoSadie" on Discord or click to join my server. This is the fastest way to get in touch!' color='#5865F2'/>
      <br />
      <SocialCard url={"https://github.com/MoSadie"} title='GitHub - MoSadie' description='View all of my projects here!' />
      <br />
      <SocialCard url={"https://ko-fi.com/mosadie"} title='Ko-Fi - MoSadie' description='Support me and my projects!' color='#13C3FF' />
      <br />
      <SocialCard url={"https://mastodon.social/@mosadie"} title='Mastodon - @MoSadie' description='Random musings and thoughts.' color='#6364FF'/>
      <br />
      <SocialCard url={"https://bsky.app/profile/mosadie.com"} title='Bluesky - @mosadie.com' description='Not really active here, but parked the handle.' color='#1185fe'/>
      <br />
      <SocialCard url={"https://x.com/MoSadie_"} title='Twitter - @MoSadie_' description='Project updates. Please @ me if you make something cool!' />
      <br />
      <SocialCard url={"https://youtube.com/@MoVODie"} title='Stream Archive - @MoVODie' description='Uploads raw streams as VODs' color='#FF0000'/>

    </Container>
  );
}
