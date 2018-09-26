package org.jhipster.blog.repository;

import org.jhipster.blog.domain.Classes;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Classes entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ClassesRepository extends JpaRepository<Classes, Long> {

}
