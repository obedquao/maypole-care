export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-10">
      <div className="text-center">
        <p>
          &copy; {new Date().getFullYear()} Maypole Care. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
