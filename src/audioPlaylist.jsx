import React from 'react';
import { Icon,Row,Col } from 'antd';



import JPlayer, {
  Gui, SeekBar, BufferBar,
  Poster, Audio, Title, FullScreen, Mute, Play, PlayBar,
  VolumeBar, Duration, CurrentTime, Download, BrowserUnsupported,
} from 'react-jplayer';
import JPlaylist, {
  initializeOptions, Playlist, Shuffle, Next, Previous, Repeat,
  TogglePlaylist, Remove, MediaLink, Title as PlaylistTitle,
} from 'react-jplaylist';

const jPlayerOptions = {
  id: 'AudioPlaylist',
  verticalVolume: true,
};

const jPlaylistOptions = {
  hidePlaylist: true,
  playlist: [
    {
      id: 0,
      title: '超强晦串集合全国最优秀迷幻嗨曲3D车震驾驶空',
      artist: 'Dj余意',
      sources: {
        mp3: 'http://pc64-19.jyw8.com:8421/up01-1134b3a605/DJ%E4%BD%99%E6%84%8F-%E6%97%A0%E6%8D%9F%E5%B8%9D%E5%9B%BD%E3%80%90%E8%B6%85%E5%BC%BA%E6%99%A6%E4%B8%B2%E9%9B%86%E5%90%88%E5%85%A8%E5%9B%BD%E6%9C%80%E4%BC%98%E7%A7%80%E8%BF%B7%E5%B9%BB%E5%97%A8%E6%9B%B23D%E8%BD%A6%E9%9C%87%E9%A9%BE%E9%A9%B6%E7%A9%BA%E9%97%B4%E3%80%91%E6%95%B0%E7%A0%81%E9%BB%91%E8%83%B6.mp3',
  
      },
        poster: 'https://zexiliang.github.io/0428/touxiang.jpg',
      free: true,
    },
    {
      id: 1,
      title: '舒服中英文proghouse音乐系列轻松节奏',
      artist: 'DjLicky路起',
      sources: {
        mp3: 'http://pc64-19.jyw8.com:8421/20190504-182685/DjLicky%E8%B7%AF%E8%B5%B7-%E8%88%92%E6%9C%8D%E4%B8%AD%E8%8B%B1%E6%96%87proghouse%E9%9F%B3%E4%B9%90%E7%B3%BB%E5%88%97%E8%BD%BB%E6%9D%BE%E8%8A%82%E5%A5%8F.mp3',
      
      },
        poster: 'https://zexiliang.github.io/0428/touxiang.jpg',
        free: true,
    },
    {
      id: 2,
      title: '界沟黎明脚步徒步专用全新音乐',
      artist: 'Dj杨小林',
      sources: {
        mp3: 'http://pc64-19.jyw8.com:8421/20190504-182685/dj%E6%9D%A8%E5%B0%8F%E6%9E%97-%E7%95%8C%E6%B2%9F%E9%BB%8E%E6%98%8E%E8%84%9A%E6%AD%A5%E5%BE%92%E6%AD%A5%E4%B8%93%E7%94%A8%E5%85%A8%E6%96%B0%E9%9F%B3%E4%B9%90%E4%B8%B2%E7%83%A7%E7%A7%81%E4%BA%BA%E8%AE%A2%E5%88%B6.mp3',
       
      },
      poster: 'https://zexiliang.github.io/0428/touxiang.jpg',
      free: true,
    },
  ],
};

initializeOptions(jPlayerOptions, jPlaylistOptions);

const AudioPlaylist = () => (
<div>

  <JPlaylist id={jPlayerOptions.id}>
    <JPlayer className="jp-sleek">
      <Audio />
      <Gui>
        <div className="jp-controls jp-icon-controls">

          <Previous><Icon type="backward" theme="filled" /></Previous>
          <Play><i className="fa">{/* Icon set in css */}</i></Play>
          <Next><Icon type="forward" theme="filled" /></Next>

          <div className="jp-volume-slider">
              <div className="jp-volume-bar-container">
                <VolumeBar />
              </div>
            </div>



          <Repeat>
            <i className="fa">{/* Icon set in css */}</i>
            <i className="fa fa-repeat" />
          </Repeat>


          <Shuffle><i className="fa fa-random" /></Shuffle>

          <div className="jp-playlist-container">
            <Playlist>
              <Remove />
              <MediaLink>
                <PlaylistTitle />
              </MediaLink>
            </Playlist>
            <TogglePlaylist><Icon type="menu-fold" /></TogglePlaylist>
          </div>




          <div className="jp-progress">
            <SeekBar>
              <BufferBar />
              <PlayBar />
              <CurrentTime />
              <Duration />
            </SeekBar>
          </div>



          <div className="jp-volume-container">
            <Mute>
              <i className="fa">{/* Icon set in css */}</i>
            </Mute>


            


          </div>
          <FullScreen><i className="fa fa-expand" /></FullScreen>
         
          <Download><i className="fa fa-download" /></Download>
          <div className="jp-title-container">
            <Poster />
            <Title />
          </div>
        </div>
        <BrowserUnsupported />
      </Gui>
    </JPlayer>
  </JPlaylist>
</div>
);

export default AudioPlaylist;
