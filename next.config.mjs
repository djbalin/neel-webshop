import MillionLint from '@million/lint';
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true
  }
};
export default MillionLint.next({
  rsc: true
})(nextConfig);