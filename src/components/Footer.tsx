export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 fixed bottom-0 w-full z-50">
      <p>&copy; {new Date().getFullYear()} Goventure Tour Guide</p>
    </footer>
  );
}