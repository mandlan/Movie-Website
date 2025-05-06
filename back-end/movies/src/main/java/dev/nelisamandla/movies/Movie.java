package dev.nelisamandla.movies;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Document(collection = "movie")
public class Movie {
    @Id
    @JsonProperty("id")
    private ObjectId id;
    @JsonProperty("imdbId")
    private String imdbId;
    @JsonProperty("title")
    private  String title;
    @JsonProperty("ReleaseDate")
    private String ReleaseDate;
    @JsonProperty("trailerLink")
    private String trailerLink;
    @JsonProperty("poster")
    private String poster;
    @JsonProperty("genres")
    private String genres;
    @JsonProperty("backdrops")
    private List<String> backdrops;
    @DocumentReference
    @JsonProperty("reviewIds")
    private List<Review> reviewIds;
}
