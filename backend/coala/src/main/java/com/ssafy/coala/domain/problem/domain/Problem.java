package com.ssafy.coala.domain.problem.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Problem {
    @Id
    private Integer id;
    private String title;
    private int accepted_user_count;
    private int level;

    private boolean give_no_rating;
    private float average_tries;
    private String description;
    private int question_cnt;

    @OneToMany(mappedBy = "problem", cascade = CascadeType.ALL, fetch = FetchType.EAGER, orphanRemoval = true)
    @Fetch(value = FetchMode.JOIN)
    private List<Tag> tags = new ArrayList<>();
    public Problem(Integer id, String title, int accepted_user_count,
                   int level, boolean give_no_rating, float average_tries, List<Tag> tags) {
        this.id = id;
        this.title = title;
        this.accepted_user_count = accepted_user_count;
        this.level = level;
        this.give_no_rating = give_no_rating;
        this.average_tries = average_tries;
        this.tags = tags;
    }
}

//
//@Entity
//public class Problem {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Integer id;
//
//    @OneToMany(mappedBy = "problem", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<Tag> tags;
//
//    // getters, setters, and other properties
//}
//
