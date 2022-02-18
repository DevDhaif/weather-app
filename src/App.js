function App() {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 -z-10 opacity-90 left-0 w-full object-cover h-full"
      >
        <source src="/videos/broken clouds.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-full h-full bg-green-600">
      <h1>hi</h1></div>
    </>
  );
}

export default App;
