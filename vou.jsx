<div className="image-preview">
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Uploaded Image ${index}`} />
        ))}
      </div>