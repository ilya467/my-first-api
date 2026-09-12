app.get('/test', (req, res) => {
  res.json({
    status: "Success",
    message: "میرا کلاؤڈ API بالکل زبردست کام کر رہا ہے!"
  });
});