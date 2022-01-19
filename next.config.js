// fix for hostname not configured to serve Next Image component
const CLOUDINARY_DOMAINS = ["res.cloudinary.com"];

for (let i = 0; i < 20; i++) {
  CLOUDINARY_DOMAINS.push(`res-${i}.cloudinary.com`);
}

module.exports = {
  images: {
    domains: CLOUDINARY_DOMAINS,
  },
};
