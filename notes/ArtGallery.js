// src/pages/ArtGallery.js

import React from 'react';
import '../css/ArtGallery.css';

function ArtGallery() {
  const artworks = [
    { id: 1, title: 'Shoto', imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f522ecce-711b-4733-ae37-6bf9c1301124/defblgr-482da282-9156-4a47-8561-7d65882da889.jpg/v1/fill/w_894,h_894,q_70,strp/shoto_todoroki__by_madmax8766_defblgr-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwMCIsInBhdGgiOiJcL2ZcL2Y1MjJlY2NlLTcxMWItNDczMy1hZTM3LTZiZjljMTMwMTEyNFwvZGVmYmxnci00ODJkYTI4Mi05MTU2LTRhNDctODU2MS03ZDY1ODgyZGE4ODkuanBnIiwid2lkdGgiOiI8PTEyMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.11gIj0tbdNxvBNwgxwyCXnhcpStz5su8I3ZeYsfKH9Q' },
    { id: 2, title: 'Mob Psycho', imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f522ecce-711b-4733-ae37-6bf9c1301124/dei8ipr-457d134f-d8d0-458a-a5e7-9e51dd22fc0e.jpg/v1/fill/w_894,h_894,q_70,strp/mob_psycho__by_madmax8766_dei8ipr-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwMCIsInBhdGgiOiJcL2ZcL2Y1MjJlY2NlLTcxMWItNDczMy1hZTM3LTZiZjljMTMwMTEyNFwvZGVpOGlwci00NTdkMTM0Zi1kOGQwLTQ1OGEtYTVlNy05ZTUxZGQyMmZjMGUuanBnIiwid2lkdGgiOiI8PTEyMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.u9s3uYzpjW5aSTyBuQAEMiebqOaVfZ3yyqUjUaaHrQQ' },
    { id: 3, title: 'Sukuna', imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f522ecce-711b-4733-ae37-6bf9c1301124/dek7vvj-589654aa-b8eb-4a9f-9bc4-99d3867c16f3.jpg/v1/fill/w_894,h_894,q_70,strp/sukuna___yuji_itadori_by_madmax8766_dek7vvj-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjAwMCIsInBhdGgiOiJcL2ZcL2Y1MjJlY2NlLTcxMWItNDczMy1hZTM3LTZiZjljMTMwMTEyNFwvZGVrN3Z2ai01ODk2NTRhYS1iOGViLTRhOWYtOWJjNC05OWQzODY3YzE2ZjMuanBnIiwid2lkdGgiOiI8PTIwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ._YX-9-FATXoC4p1xVC6QyyxAbBwglRktt5jlB6BBaCo' },
    { id: 4, title: 'Izuku x Ochako', imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f522ecce-711b-4733-ae37-6bf9c1301124/de5ycy5-9b5cd987-885d-4772-89dc-6ed4b39e3780.jpg/v1/fill/w_894,h_894,q_70,strp/uraraka__deku__by_madmax8766_de5ycy5-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI1MCIsInBhdGgiOiJcL2ZcL2Y1MjJlY2NlLTcxMWItNDczMy1hZTM3LTZiZjljMTMwMTEyNFwvZGU1eWN5NS05YjVjZDk4Ny04ODVkLTQ3NzItODlkYy02ZWQ0YjM5ZTM3ODAuanBnIiwid2lkdGgiOiI8PTEyNTAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ._Up3vxFErzmj1aGvq67j6QR0-k_Ef6OrWBc75Pufhv8' },
    { id: 5, title: 'Ochako', imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f522ecce-711b-4733-ae37-6bf9c1301124/derca7v-4ea888e9-be0e-4ba2-aca7-6f2cffbd8606.jpg/v1/fill/w_894,h_894,q_70,strp/ochako_is_love_by_madmax8766_derca7v-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2Y1MjJlY2NlLTcxMWItNDczMy1hZTM3LTZiZjljMTMwMTEyNFwvZGVyY2E3di00ZWE4ODhlOS1iZTBlLTRiYTItYWNhNy02ZjJjZmZiZDg2MDYuanBnIiwid2lkdGgiOiI8PTEwODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.nVUJ3Z1Y5pfgTH-k6Vhw7vumz3HkaV5AMLXC-lJeRI8' },
    { id: 6, title: 'Shinobu', imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f522ecce-711b-4733-ae37-6bf9c1301124/devzgtn-c4126727-30ca-4a29-a7c3-c2a34429e84c.jpg/v1/fill/w_894,h_894,q_70,strp/shinobu__by_madmax8766_devzgtn-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2Y1MjJlY2NlLTcxMWItNDczMy1hZTM3LTZiZjljMTMwMTEyNFwvZGV2emd0bi1jNDEyNjcyNy0zMGNhLTRhMjktYTdjMy1jMmEzNDQyOWU4NGMuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.8z4Sgstrc-UxFM9S4tNkSnjR5xbUv9bEWux3f1wPkBM' },



  ];

  return (
    <div className="art-gallery">
      <h1>Art Gallery</h1>
      <div className="gallery-grid">
        {artworks.map((art) => (
          <div className="art-card" key={art.id}>
            <img src={art.imageUrl} alt={art.title} />
            <h2>{art.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtGallery;
