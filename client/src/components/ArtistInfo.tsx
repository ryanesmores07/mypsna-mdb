import { createLinks } from "@/utils";

const ArtistInfo = ({ data }) => {
  const { name, images, members, profile, urls, aliases } = data;

  console.log(profile);

  // Process the profile text to replace patterns with links
  const processedProfile = createLinks(profile);

  return (
    <div className="grid grid-cols-[auto,1fr,.4fr] gap-4 py-8 px-24">
      <div className="w-32">
        {images && <img src={images[0].uri} alt={name} />}
      </div>
      <div>
        <h1 className="font-semibold">{name}</h1>
        <table className="table-auto">
          <tbody>
            <tr>
              <th className="text-left pr-12 py-2 align-top">Profile:</th>
              <td className="text-left pr-12 py-2 align-top">
                <p dangerouslySetInnerHTML={{ __html: processedProfile }}></p>
              </td>
            </tr>
            <tr>
              <th className="text-left pr-12 py-2 align-top">Sites:</th>
              <td className="text-left pr-12 py-2 align-top">
                <div className="flex flex-wrap">
                  {urls &&
                    urls.map((url, index) => (
                      <div key={url} className="max-w-[500px] min-w-[300px]">
                        <a
                          href={url}
                          className="text-blue-600 hover:underline break-words"
                        >
                          {url}
                        </a>
                        {index !== urls.length - 1 && <span>,&nbsp;</span>}
                      </div>
                    ))}
                </div>
              </td>
            </tr>
            <tr>
              <th className="text-left pr-12 py-2 align-top">Aliases:</th>
              <td className="text-left pr-12 py-2 align-top">
                <div>
                  {aliases &&
                    aliases.map((alias, index) => (
                      <p key={index}>{alias.name}</p>
                    ))}
                </div>
              </td>
            </tr>
            <tr>
              <th className="text-left pr-12 py-2 align-top">Members:</th>
              <td className="text-left pr-12 py-2 align-top">
                {members &&
                  members.map((member) => <p key={member.id}>{member.name}</p>)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArtistInfo;
