import { FileBadge2 } from "lucide-react";

function CertificationsCard({ title }) {
  return (
    <div className="flex items-center gap-2 text-center rounded-3xl bg-white w-100 p-10 mt-20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <FileBadge2 className="w-6 h-6 text-blue-500" />
      <h2 className="font-semibold">{title}</h2>
    </div>
  );
}

const Certifications = () => {
  return (
    <div id="certifications">
      <h1 className="text-3xl lg:text-6xl text-center mt-20 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-600 to-blue-500">
        Certifications
      </h1>
      <div className="flex items-center flex-col lg:flex-wrap lg:flex-row justify-between lg:m-20 lg:p-20">
        <CertificationsCard title="abcpqrxyz" />
        <CertificationsCard title="abcpqrxyz" />
        <CertificationsCard title="abcpqrxyz" />
        <CertificationsCard title="abcpqrxyz" />
        <CertificationsCard title="abcpqrxyz" />
        <CertificationsCard title="abcpqrxyz" />
        <CertificationsCard title="abcpqrxyz" />
      </div>
    </div>
  );
};

export default Certifications;
