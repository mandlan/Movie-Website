package dev.nelisamandla.movies;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Review {

    @Id
    @JsonProperty("objectId")
    private ObjectId objectId;
    @JsonProperty("body")
    private String body;

    public Review(String body) {
        this.body = body;
    }
}
